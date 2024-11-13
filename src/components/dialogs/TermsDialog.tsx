import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface TermsDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    type: 'terms' | 'privacy';
}

export const TermsDialog: React.FC<TermsDialogProps> = ({ isOpen, onOpenChange, type }) => {
    const content = {
        terms: {
            title: 'Terms of Service',
            content: (
                <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                    <p className="font-bold text-base text-gray-900">IMPORTANT – PLEASE READ CAREFULLY</p>
                    <p>
                        These Terms of Service and Conditions ("Terms") represent a legally binding agreement between you
                        and the <span className="font-semibold">Bharatiya Popular Party ("Party")</span> regarding your use of the Bharatiya Popular Party
                        website. By using the website, you acknowledge that you have read, understood, and agree to comply
                        with these Terms. <span className="font-semibold">If you do not agree, please do not use the Service.</span>
                    </p>
                    <p>
                        The Party may update these Terms periodically. Any changes to these Terms will be posted on the
                        Party's official website, <a href="https://www.bppindia.com" className="text-blue-500 underline">www.bppindia.com</a>. If you do not agree with any updates, you may
                        discontinue use and uninstall the Service at any time. By continuing to use the Service after
                        changes are made, you acknowledge your acceptance of the revised Terms.
                    </p>
                </div>
            )
        },
        privacy: {
            title: 'Privacy Policy',
            content: (
                <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                    <p className="font-bold text-base text-gray-900">Privacy Policy</p>
                    <p>
                        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you use our website or services.
                    </p>
                    <p>
                        We collect information that you provide directly to us, including but not limited to:
                        - Personal information (name, email address, phone number)
                        - Demographics
                        - Other information you choose to provide
                    </p>
                </div>
            )
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold text-blue-700">
                        {content[type].title}
                    </DialogTitle>
                </DialogHeader>
                {content[type].content}
            </DialogContent>
        </Dialog>
    );
};
