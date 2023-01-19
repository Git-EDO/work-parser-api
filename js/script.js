// Бургер

const burger = document.querySelector('.burger')
const mobileMenu = document.querySelector('.nav')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  if (body.classList.contains('lock')) {
    burger.classList.remove('active')
    body.classList.remove('lock')
    mobileMenu.classList.remove('active')
  } else {
    burger.classList.add('active')
    body.classList.add('lock')
    mobileMenu.classList.add('active')
  }
})

// Селект

// Управление select
let dropdownSelect = document.querySelectorAll('.form-dropdown-body')
let dropdownOptions = document.querySelectorAll('.form-dropdown-options')
let hiddenInput = document.querySelector(
  '.form-dropdown-select dropdown-input-hidden'
)

dropdownSelect.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    let thisDropDown = btn
      .closest('.form-dropdown-select')
      .querySelector('.form-dropdown-options')
    thisDropDown.classList.toggle('active')
  })
})

// Присваиваем значение выбранной опции в селект

dropdownOptions.forEach((dropdown) => {
  dropdown.addEventListener('click', function (e) {
    let thisSelect = dropdown.closest('.form-dropdown-select')
    thisSelect.querySelector('.form-dropdown-body').innerText =
      e.target.innerText

    // Добавляем значение в скрытый инпут чтобы можно было отправлять данные сабмитом формы
    thisSelect.querySelector('.dropdown-input-hidden').innerText =
      e.target.innerText

    thisSelect.classList.remove('active')
    dropdown.classList.remove('active')
  })
})

// Закрываем селект при клике не по нему

document.addEventListener('click', function (e) {
  if (!e.target.closest('.form-dropdown-select')) {
    dropdownSelect.forEach((select) => select.classList.remove('active'))
    dropdownOptions.forEach((dropdown) => dropdown.classList.remove('active'))
  }
})

// JSON example

const example = {
  glossary: {
    title: 'example glossary',
    GlossDiv: {
      title: 'S',
      GlossList: {
        GlossEntry: {
          ID: 'SGML',
          SortAs: 'SGML',
          GlossTerm: 'Standard Generalized Markup Language',
          Acronym: 'SGML',
          Abbrev: 'ISO 8879:1986',
          GlossDef: {
            para: 'A meta-markup language, used to create markup languages such as DocBook.',
            GlossSeeAlso: ['GML', 'XML'],
          },
          GlossSee: 'markup',
          SeeB: 1234,
          finished: true,
          finished: false,
          ok: true,
          Case: null,
        },
      },
    },
  },
}

$('#json-placeholder').jJsonViewer(example)
