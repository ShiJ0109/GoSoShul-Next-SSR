export default function ShulProfileModel(values) {
  let model = {
    status: null,
    status_code: null,
    contact: {
      firstName: null,
      lastName: null,
      phone: null,
      email: null
    },
    shul_info: {
      legal_name: null,
      tax_id: null,
      country: null,
      state: null,
      address_line_1: null,
      address_line_2: null,
      city: null,
      zip_code: null
    }
  };
  if (values != null) {
    model = {
      status: values.status,
      status_code: values.status_code,
      contact: {
        firstName: values.contact.first_name,
        lastName: values.contact.last_name,
        phone: values.contact.phone,
        email: values.contact.email,
      },
      shulInfo: {
        legalName: values.shul_info.legal_name,
        taxId: values.shul_info.tax_id,
        country: values.shul_info.country,
        state: values.shul_info.state,
        address_1: values.shul_info.address_line_1,
        address_2: values.shul_info.address_line_2,
        city: values.shul_info.city,
        zipCode: values.shul_info.zip_code,
      },
    };
  }
  return model;
}
