import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FileInputProps = {
    id: string;
    label: string;
    required?: boolean;
    onChange: (file: File | null) => void;
};

export const FileInput = ({ id, label, required = false, onChange }: FileInputProps) => (
    <div>
        <Label htmlFor={id}>{label} {required && <span className="text-red-700">*</span>}</Label>
        <Input
            type="file"
            id={id}
            required={required}
            onChange={(e) => {
                const file = e.target.files?.[0] || null;
                onChange(file);
            }}
        />
    </div>
);
