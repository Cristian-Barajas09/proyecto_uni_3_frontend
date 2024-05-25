import { ENDPOINTS } from "@lib/api/endpoints";
import React from "react";

function QrContent() {
    const [qr, setQr] = React.useState<string>('');
    React.useEffect(() => {
        const getQr = async () => {
            const response = await fetch(`${ENDPOINTS.BASE}/${ENDPOINTS.VERSION}/${ENDPOINTS.QR}`);
            
            if (response.ok) {
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setQr(imageUrl);
            }
            
        }

        getQr();
    }, []);
    return (
        <div>
            <div>
                <img src={qr} alt="QR" />
            </div>
        </div>
    );
}

export {
    QrContent
}