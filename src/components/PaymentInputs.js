import React from 'react';
import { usePaymentInputs } from 'react-payment-inputs';

function PaymentInputs() {
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    return (
        <div>
            <div class="input-container ic1">
                <input class="input" autoComplete='cc-number' {...getCardNumberProps()} />
            </div>

            <div class="input-container ic1">
                <input class="input" autoComplete='cc-exp' {...getExpiryDateProps()} />
            </div>
            
            <div class="input-container ic2">
                <input class="input" autoComplete='cc-csc' {...getCVCProps()} />
            </div>
            {meta.isTouched && meta.error && <span class="subtitle">Error: {meta.error}</span>}
        </div>

    );
}

export default PaymentInputs;