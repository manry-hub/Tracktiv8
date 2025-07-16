// components/ui/success-modal.tsx
"use client";

export default function SuccessModal() {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-auto">
                <svg
                    viewBox="0 0 24 24"
                    className="text-green-600 w-16 h-16 mx-auto my-4"
                >
                    <path
                        fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                    />
                </svg>
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-gray-900">
                        Analisis Selesai!
                    </h3>

                    <p className="text-gray-500">
                        Semoga kamu puas dengan hasilnya!
                    </p>
                </div>
            </div>
        </div>
    );
}
