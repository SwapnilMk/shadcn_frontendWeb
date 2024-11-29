import { memo, useState, useMemo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography,
    GeographyProps
} from "react-simple-maps";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import maharashtra from '@/assets/maps/states/maharashtra.json';
import gujarat from '@/assets/maps/states/gujarat.json';
import india from '@/assets/maps/india.json';

type StateType = 'maharashtra' | 'gujarat';
type TabType = 'state' | 'national';

interface ProjectionConfig {
    scale: number;
    center: [number, number];
}

interface StateProjections {
    [key: string]: ProjectionConfig;
}

interface ProjectionConfigs {
    state: StateProjections;
    national: ProjectionConfig;
}

interface MapChartProps {
    SelectedTab: TabType;
    state: StateType | null;
    dist?: string;
}

interface GeoProperty {
    district?: string;
    name?: string;
    ST_NM?: string;
}

const projectionConfig: ProjectionConfigs = {
    state: {
        maharashtra: {
            scale: 4000,
            center: [77, 18.5]
        },
        gujarat: {
            scale: 4000,
            center: [71, 22.5]
        }
    },
    national: {
        scale: 1000,
        center: [78.9629, 22.5937]
    }
};

const MapChart: React.FC<MapChartProps> = ({ SelectedTab, state, dist }) => {
    const [openTooltip, setOpenTooltip] = useState<string>("");

    const mapData = useMemo(() => {
        if (SelectedTab === 'state' && state) {
            switch (state) {
                case 'maharashtra':
                    return maharashtra;
                case 'gujarat':
                    return gujarat;
                default:
                    return maharashtra;
            }
        }
        return india;
    }, [SelectedTab, state]);

    const getTooltipContent = (geo: GeographyProps['geography']): string => {
        const properties = geo.properties as GeoProperty;
        if (SelectedTab === 'state') {
            return properties.district || '';
        }
        return properties.name || properties.ST_NM || '';
    };

    const currentProjection = useMemo((): ProjectionConfig => {
        if (SelectedTab === 'state' && state) {
            return projectionConfig.state[state] || projectionConfig.state.maharashtra;
        }
        return projectionConfig.national;
    }, [SelectedTab, state]);

    const getFillColor = (geo: GeographyProps['geography']): string => {
        const properties = geo.properties as GeoProperty;
        if (dist && properties.district?.toLowerCase() === dist.toLowerCase()) {
            return "#0EA5E9"; // Highlight color for selected district
        }
        return "#D1D5DB"; // Default color
    };

    return (
        <div className="relative w-full h-full">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={currentProjection}
            >
                <ZoomableGroup>
                    <Geographies geography={mapData}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const tooltipContent = getTooltipContent(geo);
                                return (
                                    <TooltipProvider key={geo.rsmKey}>
                                        <Tooltip open={openTooltip === geo.rsmKey}>
                                            <TooltipTrigger asChild>
                                                <Geography
                                                    geography={geo}
                                                    onMouseEnter={() => setOpenTooltip(geo.rsmKey)}
                                                    onMouseLeave={() => setOpenTooltip("")}
                                                    style={{
                                                        default: {
                                                            fill: getFillColor(geo),
                                                            outline: "none",
                                                            stroke: "#FFFFFF",
                                                            strokeWidth: 0.5
                                                        },
                                                        hover: {
                                                            fill: dist && (geo.properties as GeoProperty).district?.toLowerCase() === dist.toLowerCase() 
                                                                ? "#0EA5E9"
                                                                : "#60A5FA", 
                                                            outline: "none",
                                                            stroke: "#FFFFFF",
                                                            strokeWidth: 0.5,
                                                            cursor: "pointer"
                                                        },
                                                        pressed: {
                                                            fill: "#E42",
                                                            outline: "none"
                                                        }
                                                    }}
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{tooltipContent}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                );
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default memo(MapChart);