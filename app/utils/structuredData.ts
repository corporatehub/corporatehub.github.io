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
    description: 'CorporateHub® offers consultation, training, tuning, data sync & migration, deployment, and support services for businesses using Odoo.',
    url: 'https://corporatehub.eu',
    ...data
  };

  return JSON.stringify(baseData);
}

