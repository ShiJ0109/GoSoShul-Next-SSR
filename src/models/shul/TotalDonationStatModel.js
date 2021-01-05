export default function TotalDonationStatModel(data) {
  const {status, status_code, stat} = data;
  return {
    status,
    status_code,
    stat:stat? stat : {
      raised: '',
      donations: '',
      shuls: '',
      goal: '',
      achieved: ''
    }
  };
}
