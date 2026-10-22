import {
  useEffect,
  useRef,
  useState,
} from 'react'

import './CustomSelect.css'

export type CustomSelectOption = {
  value: string
  label: string
}

type CustomSelectProps = {
  id: string
  label: string
  value: string
  options: CustomSelectOption[]
  onChange: (value: string) => void
  className?: string
}

export default function CustomSelect({
  id,
  label,
  value,
  options,
  onChange,
  className = '',
}: CustomSelectProps) {
  const [isOpen, setIsOpen] =
    useState(false)

  const [
    highlightedIndex,
    setHighlightedIndex,
  ] = useState(0)

  const selectRef =
    useRef<HTMLDivElement>(null)

  const selectedOption =
    options.find(
      (option) =>
        option.value === value,
    )

  const selectedLabel =
    selectedOption?.label ??
    options[0]?.label ??
    ''

  function openSelect() {
    const selectedIndex =
      options.findIndex(
        (option) =>
          option.value === value,
      )

    setHighlightedIndex(
      selectedIndex >= 0
        ? selectedIndex
        : 0,
    )

    setIsOpen(true)
  }

  function closeSelect() {
    setIsOpen(false)
  }

  function chooseOption(
    optionValue: string,
  ) {
    onChange(optionValue)
    closeSelect()
  }

  function handleKeyDown(
    event:
      React.KeyboardEvent<HTMLButtonElement>,
  ) {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      const option =
        options[highlightedIndex]

      if (option) {
        chooseOption(
          option.value,
        )
      }

      return
    }

    if (
      event.key ===
      'ArrowDown'
    ) {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      setHighlightedIndex(
        (current) =>
          (current + 1) %
          options.length,
      )

      return
    }

    if (
      event.key ===
      'ArrowUp'
    ) {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      setHighlightedIndex(
        (current) =>
          (
            current -
            1 +
            options.length
          ) %
          options.length,
      )

      return
    }

    if (
      event.key ===
      'Escape'
    ) {
      closeSelect()
    }
  }

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent,
    ) {
      if (
        selectRef.current &&
        !selectRef.current.contains(
          event.target as Node,
        )
      ) {
        closeSelect()
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }
  }, [])

  return (
    <div
      className={`
        custom-select-field
        ${className}
      `.trim()}
    >
      <label
        htmlFor={id}
        className="custom-select-field__label"
      >
        {label}
      </label>

      <div
        ref={selectRef}
        className="custom-select"
      >
        <button
          id={id}
          type="button"
          className="custom-select__button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={`${id}-listbox`}
          onClick={() =>
            isOpen
              ? closeSelect()
              : openSelect()
          }
          onKeyDown={
            handleKeyDown
          }
        >
          <span className="custom-select__value">
            {selectedLabel}
          </span>

          <span
            className={`
              custom-select__chevron
              ${
                isOpen
                  ? 'custom-select__chevron--open'
                  : ''
              }
            `}
            aria-hidden="true"
          >
            ⌄
          </span>
        </button>

        {isOpen && (
          <div
            id={`${id}-listbox`}
            className="custom-select__menu"
            role="listbox"
            aria-label={label}
          >
            {options.map(
              (
                option,
                index,
              ) => (
                <button
                  key={
                    option.value
                  }
                  type="button"
                  role="option"
                  aria-selected={
                    value ===
                    option.value
                  }
                  className={`
                    custom-select__option
                    ${
                      value ===
                      option.value
                        ? 'custom-select__option--selected'
                        : ''
                    }
                    ${
                      highlightedIndex ===
                      index
                        ? 'custom-select__option--highlighted'
                        : ''
                    }
                  `}
                  onPointerEnter={() =>
                    setHighlightedIndex(
                      index,
                    )
                  }
                  onClick={() =>
                    chooseOption(
                      option.value,
                    )
                  }
                >
                  {option.label}
                </button>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  )
}
