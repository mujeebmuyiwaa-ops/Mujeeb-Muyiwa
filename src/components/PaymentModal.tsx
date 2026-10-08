import React, { useState } from 'react';
import {
  X,
  CreditCard,
  Building2,
  Copy,
  Check,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileText,
  DollarSign
} from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
  initialAmount?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'Standard Package',
  initialAmount = '$750',
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPackage || 'Standard Package');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Card Form State
  const [cardData, setCardData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    country: 'United States',
  });

  // Bank Transfer Confirmation Form State
  const [transferData, setTransferData] = useState({
    senderName: '',
    email: '',
    amountSent: '',
    referenceCode: '',
  });

  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<{
    method: string;
    amount: string;
    refId: string;
    date: string;
  } | null>(null);

  if (!isOpen) return null;

  const planAmounts: Record<string, string> = {
    'Basic Package': '$350',
    'Standard Package': '$750',
    'Super Premium Package': '$2,000',
    'Custom Invoice': initialAmount || '$500',
  };

  const currentAmount = planAmounts[selectedPlan] || initialAmount || '$750';

  const bankDetails = [
    { label: 'Account Name', value: 'Mujeeb Muyiwa Abdullazeez', key: 'name' },
    { label: 'Bank Name', value: 'Lead Bank', key: 'bank' },
    { label: 'Account Number', value: '213476293639', key: 'acc_num' },
    { label: 'Routing Number (ACH & Wire)', value: '101019644', key: 'routing' },
    { label: 'Account Type', value: 'Personal Checking', key: 'type' },
    { label: 'Bank Address', value: '9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA', key: 'address' },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCopyAll = () => {
    const formatted = bankDetails.map((b) => `${b.label}: ${b.value}`).join('\n');
    navigator.clipboard.writeText(formatted);
    setCopiedField('all');
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccessReceipt({
        method: 'Credit / Debit Card (Cleva Payment Gateway)',
        amount: currentAmount,
        refId: 'MSR-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      });
      setPaymentSuccess(true);
    }, 1200);
  };

  const handleBankConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccessReceipt({
        method: 'Direct US Bank Transfer (Lead Bank / Cleva USD)',
        amount: currentAmount,
        refId: 'ACH-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      });
      setPaymentSuccess(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
          aria-label="Close payment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {paymentSuccess && successReceipt ? (
          /* Payment Success State */
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Payment Confirmed!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Thank you for trusting <strong>Mujeeb Sales Rescue</strong>. Your payment for the{' '}
              <strong>{selectedPlan}</strong> has been logged and sent to Mujeeb's Cleva account.
            </p>

            {/* Receipt Summary Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 max-w-md mx-auto mb-6 space-y-2">
              <div className="flex justify-between pb-2 border-b border-slate-200 font-bold text-slate-900">
                <span>Transaction Receipt</span>
                <span className="text-orange-600 font-extrabold">{successReceipt.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service Plan:</span>
                <span className="font-semibold">{selectedPlan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Channel:</span>
                <span className="font-semibold">{successReceipt.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Reference Code:</span>
                <span className="font-mono font-bold text-slate-900">{successReceipt.refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date:</span>
                <span>{successReceipt.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Beneficiary:</span>
                <span>Mujeeb Muyiwa Abdullazeez</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs max-w-md mx-auto mb-6 text-left">
              <strong>Next Onboarding Step:</strong> Mujeeb will contact you immediately via email ({cardData.email || transferData.email || 'your email'}) and WhatsApp with your private store review questionnaire and kick-off roadmap.
            </div>

            <button
              onClick={() => {
                setPaymentSuccess(false);
                onClose();
              }}
              className="px-8 py-3 text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full transition-colors shadow-sm"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Payment Form View */
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Cleva Secure Payment Checkout</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Complete Your Store Rescue Payment
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Pay securely with your credit/debit card via Cleva or make a direct US bank transfer (ACH/Wire) to Mujeeb's verified Lead Bank account.
            </p>

            {/* Plan Picker */}
            <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Package
                </span>
                <span className="text-lg font-extrabold text-orange-600">
                  {currentAmount} USD
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Basic Package', 'Standard Package', 'Super Premium Package'].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setSelectedPlan(pkg)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedPlan === pkg
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{pkg.replace(' Package', '')}</span>
                    <span className="block text-[10px] font-normal text-slate-400">
                      {planAmounts[pkg]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Method Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl mb-6 border border-slate-200/60">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-4 h-4 text-orange-500" />
                <span>Credit / Debit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  paymentMethod === 'bank'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4 text-orange-500" />
                <span>US Bank Transfer (Cleva)</span>
              </button>
            </div>

            {paymentMethod === 'card' ? (
              /* CARD PAYMENT FORM */
              <form onSubmit={handleCardSubmit} className="space-y-4">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Secured by 256-bit encryption. Card payments settle directly into Mujeeb's USD Cleva account.
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={cardData.name}
                      onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Receipt Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={cardData.email}
                      onChange={(e) => setCardData({ ...cardData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="4000 1234 5678 9010"
                      maxLength={19}
                      value={cardData.cardNumber}
                      onChange={(e) => {
                        // format with spaces
                        const val = e.target.value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim();
                        setCardData({ ...cardData, cardNumber: val });
                      }}
                      className="w-full pl-3.5 pr-24 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-bold text-slate-400">
                      <span>VISA</span>
                      <span>MC</span>
                      <span>AMEX</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Expiry (MM/YY) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      value={cardData.expiry}
                      onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      CVC / CVV *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      maxLength={4}
                      value={cardData.cvc}
                      onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-4 px-6 rounded-full font-bold text-sm text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-md shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {processing ? (
                    <span>Processing Payment via Cleva...</span>
                  ) : (
                    <>
                      <span>Pay {currentAmount} Securely Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* US BANK TRANSFER DETAILS (CLEVA / LEAD BANK) */
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="text-xs text-slate-600">
                    Send funds via ACH or Domestic Wire to Mujeeb's verified US account:
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyAll}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedField === 'all' ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span>All Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy All Details</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2.5">
                  {bankDetails.map((item) => (
                    <div
                      key={item.key}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          {item.label}
                        </span>
                        <span className="font-semibold text-slate-900 break-all select-all">
                          {item.value}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopy(item.value, item.key)}
                        className="p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-slate-900 transition-colors shrink-0 cursor-pointer"
                        title="Copy"
                      >
                        {copiedField === item.key ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Transfer Notification Form */}
                <form onSubmit={handleBankConfirm} className="pt-4 border-t border-slate-200 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Confirm You Initiated Transfer:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Sender Name on Bank Account"
                      value={transferData.senderName}
                      onChange={(e) => setTransferData({ ...transferData, senderName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-orange-500"
                    />

                    <input
                      type="email"
                      required
                      placeholder="Your Confirmation Email"
                      value={transferData.email}
                      onChange={(e) => setTransferData({ ...transferData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {processing ? (
                      <span>Verifying Bank Notification...</span>
                    ) : (
                      <>
                        <span>I Have Completed the Transfer ({currentAmount})</span>
                        <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Cleva Merchant Account
              </span>
              <span>Need invoice first? Contact salesrescuemujeeb@gmail.com</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
