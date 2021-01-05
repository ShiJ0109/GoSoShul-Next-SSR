export function DonateModel(session) {
  const DonateModel = {
    session,
    id: null,
    shul_id: '',
    ref: '',
    referrer_id: '',
    donate:
        {
          charge_fee: '',
          cc_number: '',
          cc_exp_date: '',
          cc_cvv: '',
          message: '',
          amount: '',
          double: '',
          supercharge: ''
        }
  };
  return DonateModel;
}

export function TagModel(session) {
  const TagModel = {
    session,
    id: null,
    shul_id: '',
    ref_option: '',
    tags: [
      {
        first_name: '',
        last_name: '',
        email: ''
      },
      {
        first_name: '',
        last_name: '',
        email: ''
      }
    ]
  };
  return TagModel;
}
