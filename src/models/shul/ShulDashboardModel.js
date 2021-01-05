export default function ShulDashboardModel(shulDashboardState) {
  const model = {
    deadline: shulDashboardState.deadline,
    campaign_url: shulDashboardState.campaign.campaign_url,
    campaign_stat: {
      congregation: shulDashboardState.donation_stat.direct_donations.donors,
      tagged: shulDashboardState.donation_stat.indirect_donations.donors,
      social: shulDashboardState.donation_stat.social_donations.donors,
      total_network: shulDashboardState.donation_stat.in_network.donors,
      raised: shulDashboardState.donation_stat.total.amount,
    },
    shul_status: shulDashboardState.shul_status,
  };
  return model;
}
