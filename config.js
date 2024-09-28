export const config = {
  domainSource: "https://51608797-a145-459e-adfd-0e0ecc012709.weweb-preview.io/", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/product/[^/]+",
          metaDataEndpoint: "https://baserow-pinshasa-u21986.vm.elestio.app/api/database/rows/table/560/{row_id}/?user_field_names=true"
      },
		{
          pattern: "/origins/[^/]+",
          metaDataEndpoint: "https://baserow-pinshasa-u21986.vm.elestio.app/api/database/rows/table/548/{row_id}/?user_field_names=true"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
