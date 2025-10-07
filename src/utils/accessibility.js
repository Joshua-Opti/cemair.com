// Accessibility utilities for WCAG 2.1 AA compliance

// Focus management
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  firstElement?.focus()

  return () => element.removeEventListener('keydown', handleTabKey)
}

// Skip to main content
export const addSkipLink = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50'
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// ARIA live region for announcements
export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Keyboard navigation helpers
export const handleKeyboardNavigation = (event, onEnter, onEscape, onArrowUp, onArrowDown) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      onEnter?.()
      break
    case 'Escape':
      event.preventDefault()
      onEscape?.()
      break
    case 'ArrowUp':
      event.preventDefault()
      onArrowUp?.()
      break
    case 'ArrowDown':
      event.preventDefault()
      onArrowDown?.()
      break
  }
}

// Color contrast checker
export const checkColorContrast = (foreground, background) => {
  const getLuminance = (color) => {
    const rgb = color.match(/\d+/g)
    if (!rgb) return 0
    
    const [r, g, b] = rgb.map(c => {
      c = parseInt(c) / 255
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    })
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const l1 = getLuminance(foreground)
  const l2 = getLuminance(background)
  const contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
  
  return {
    ratio: contrast,
    passesAA: contrast >= 4.5,
    passesAAA: contrast >= 7
  }
}

// Form validation with accessibility
export const validateFormField = (field, rules) => {
  const errors = []
  const value = field.value.trim()
  
  rules.forEach(rule => {
    if (rule.required && !value) {
      errors.push(rule.message || 'This field is required')
    } else if (rule.pattern && !rule.pattern.test(value)) {
      errors.push(rule.message || 'Invalid format')
    } else if (rule.minLength && value.length < rule.minLength) {
      errors.push(rule.message || `Minimum ${rule.minLength} characters required`)
    } else if (rule.maxLength && value.length > rule.maxLength) {
      errors.push(rule.message || `Maximum ${rule.maxLength} characters allowed`)
    }
  })

  // Update ARIA attributes
  const hasError = errors.length > 0
  field.setAttribute('aria-invalid', hasError)
  field.setAttribute('aria-describedby', hasError ? `${field.id}-error` : '')

  return {
    isValid: !hasError,
    errors
  }
}

// High contrast mode detection
export const isHighContrastMode = () => {
  return window.matchMedia('(prefers-contrast: high)').matches
}

// Reduced motion detection
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Screen reader detection
export const isScreenReaderActive = () => {
  return window.speechSynthesis && window.speechSynthesis.getVoices().length > 0
}

// Initialize accessibility features
export const initAccessibility = () => {
  // Add skip link
  addSkipLink()

  // Handle reduced motion
  if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0s')
  }

  // Handle high contrast mode
  if (isHighContrastMode()) {
    document.documentElement.classList.add('high-contrast')
  }

  // Add focus indicators for keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation')
    }
  })

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation')
  })
}

// Accessibility testing helpers
export const runAccessibilityTests = () => {
  const tests = []

  // Check for alt text on images
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
  if (imagesWithoutAlt.length > 0) {
    tests.push({
      type: 'error',
      message: `${imagesWithoutAlt.length} images missing alt text`,
      elements: Array.from(imagesWithoutAlt)
    })
  }

  // Check for form labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')
  const unlabeledInputs = Array.from(inputsWithoutLabels).filter(input => {
    const id = input.id
    return !id || !document.querySelector(`label[for="${id}"]`)
  })
  
  if (unlabeledInputs.length > 0) {
    tests.push({
      type: 'error',
      message: `${unlabeledInputs.length} form inputs missing labels`,
      elements: unlabeledInputs
    })
  }

  // Check for heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  let previousLevel = 0
  const headingIssues = []

  headings.forEach(heading => {
    const level = parseInt(heading.tagName.charAt(1))
    if (level > previousLevel + 1) {
      headingIssues.push(heading)
    }
    previousLevel = level
  })

  if (headingIssues.length > 0) {
    tests.push({
      type: 'warning',
      message: 'Heading hierarchy issues detected',
      elements: headingIssues
    })
  }

  return tests
}
