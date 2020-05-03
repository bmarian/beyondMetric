const csToggle = query('#csToggle')
const msToggle = query('#msToggle')
const toggles = queryAll('#csToggle, #msToggle')

const loadValuesToToggle = function() {
    chrome.storage.sync.get('bmToggleStates', function(result) {
        const toggleStates = result.bmToggleStates
        
        csToggle.checked = toggleStates.csToggle
        msToggle.checked = toggleStates.msToggle
    })
}

const saveChanges = function() {
    const bmToggleStates = {
        'csToggle': csToggle.checked,
        'msToggle': msToggle.checked
    }

    chrome.storage.sync.set({'bmToggleStates': bmToggleStates}, function(result) {
        console.log('Result from set: ', result)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    loadValuesToToggle()
})

toggles.forEach(el => {
  el.addEventListener('change', function(ev) {
      saveChanges()
  })  
})