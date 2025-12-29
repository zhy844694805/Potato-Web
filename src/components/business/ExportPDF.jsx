import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import Button from '../ui/Button'
import './ExportPDF.css'

/**
 * ExportPDF component - Exports portfolio/content to PDF
 * Uses html2pdf.js for client-side PDF generation
 */
function ExportPDF({ contentRef, filename = 'document' }) {
  const [isExporting, setIsExporting] = useState(false)
  const { language } = useLanguage()

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  const handleExport = async () => {
    if (!contentRef?.current) {
      console.error('Content reference not provided')
      return
    }

    setIsExporting(true)

    try {
      // Dynamic import to reduce bundle size
      const html2pdf = (await import('html2pdf.js')).default

      const element = contentRef.current
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `${filename}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('PDF export failed:', error)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <Button
      variant="secondary"
      onClick={handleExport}
      disabled={isExporting}
      className="export-pdf-button"
      aria-label={t('导出PDF', 'Export PDF', 'Esporta PDF')}
    >
      {isExporting ? (
        <>
          <span className="export-spinner" aria-hidden="true" />
          {t('导出中...', 'Exporting...', 'Esportazione...')}
        </>
      ) : (
        <>
          <span className="export-icon" aria-hidden="true">📄</span>
          {t('导出PDF', 'Export PDF', 'Esporta PDF')}
        </>
      )}
    </Button>
  )
}

export default ExportPDF
