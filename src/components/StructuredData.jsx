import { Helmet } from 'react-helmet-async'

/**
 * StructuredData component for JSON-LD schema markup
 *
 * @param {Object|Object[]} data - Single schema object or array of schema objects
 *
 * Usage examples:
 * - Single schema: <StructuredData data={organizationSchema('en')} />
 * - Multiple schemas: <StructuredData data={[webSiteSchema('en'), localBusinessSchema('en')]} />
 */
function StructuredData({ data }) {
  // Handle null or undefined data
  if (!data) {
    return null
  }

  // If data is an array, render each schema as a separate script tag
  if (Array.isArray(data)) {
    // Filter out any null/undefined entries
    const validSchemas = data.filter(schema => schema != null)

    if (validSchemas.length === 0) {
      return null
    }

    return (
      <Helmet>
        {validSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
    )
  }

  // Single schema object
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}

export default StructuredData
