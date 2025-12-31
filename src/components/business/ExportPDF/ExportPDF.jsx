import { useState } from 'react'
import Button from '../../ui/Button'
import { trackEvent } from '../../../utils/analytics'
import './ExportPDF.css'

/**
 * ExportPDF Component
 *
 * Exports the content of a referenced element to PDF using html2pdf.js
 *
 * @param {Object} props
 * @param {React.RefObject} props.contentRef - Reference to the element to export
 * @param {string} props.filename - Name of the exported PDF file (without .pdf)
 * @param {Object} props.options - html2pdf options override
 * @param {string} props.buttonText - Custom button text
 * @param {string} props.variant - Button variant (primary, secondary, outline)
 * @param {string} props.className - Additional CSS class
 * @param {Function} props.onExportStart - Callback before export starts
 * @param {Function} props.onExportComplete - Callback after export completes
 * @param {Function} props.onExportError - Callback on export error
 */
function ExportPDF({
  contentRef,
  filename = 'document',
  options = {},
  buttonText,
  variant = 'secondary',
  className = '',
  onExportStart,
  onExportComplete,
  onExportError
}) {
  const [isExporting, setIsExporting] = useState(false)

  const defaultOptions = {
    margin: [10, 10, 10, 10],
    filename: `${filename}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    }
  }

  const handleExport = async () => {
    if (!contentRef?.current) {
      if (import.meta.env.DEV) {
        console.error('ExportPDF: contentRef is required')
      }
      return
    }

    setIsExporting(true)
    onExportStart?.()

    // Track export event
    trackEvent('pdf_export', {
      filename: filename,
      page: window.location.pathname
    })

    try {
      // Dynamic import for code splitting
      const html2pdf = (await import('html2pdf.js')).default

      const element = contentRef.current
      const mergedOptions = { ...defaultOptions, ...options }

      await html2pdf()
        .set(mergedOptions)
        .from(element)
        .save()

      onExportComplete?.()
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('PDF export failed:', error)
      }
      onExportError?.(error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button
      variant={variant}
      className={`export-pdf-btn ${className}`}
      onClick={handleExport}
      disabled={isExporting}
      loading={isExporting}
    >
      {isExporting ? (
        <>
          <span className="export-pdf-icon">&#8635;</span>
          {buttonText || 'Exporting...'}
        </>
      ) : (
        <>
          <span className="export-pdf-icon">&#128196;</span>
          {buttonText || 'Export PDF'}
        </>
      )}
    </Button>
  )
}

export default ExportPDF
