export default function CampaignSettingsModel(values) {
  let model = null;
  if (values != null) {
    model = values;
    if (model.introduction === null) {
      model.introduction = {
        logo_link: null,
        about_shul: '',
        photos: [],
        video_link: '',
      };
    }
    if (model.in_memory_of === null) model.in_memory_of = [];
    if (model.sponsors === null) model.sponsors = [];
  }
  return model;
}

export function CampaignSettingsPostModel(values) {
  const model = {
    introduction: {
      logo_link: values.introduction.logo_link,
      about_shul: values.introduction.about_shul,
      video_link: values.introduction.video_link,
      photos: values.introduction.photos,
    },
    in_memory_of: values.in_memory_of,
    sponsors: values.sponsors,
  };
  console.log(model);
  return model;
}

export function CampaignSettingsPreviewModel(values) {

}
