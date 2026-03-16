type StructuredData = {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export function generateStructuredData(data: Partial<StructuredData>): string {
  const baseData: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CorporateHub®',
    description: 'Odoo consulting partner specializing in profitability and utilization visibility for IT services agencies. Built by an OCA maintainer with 24 modules on Odoo 18.0.',
    url: 'https://corporatehub.eu',
    ...data
  };

  return JSON.stringify(baseData);
}

