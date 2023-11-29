    // Check if there's any existing content in local storage
    document.getElementById('notepad').innerText = localStorage.getItem('notepadContent') || 'Why not take some notes...';

    // Save content to local storage when the "Save" button is clicked
    document.getElementById('btnSave').addEventListener('click', function() {
        var content = document.getElementById('notepad').innerText;
        localStorage.setItem('notepadContent', content);
        alert('Notepad content saved!');
    });

    // Save content to local storage when the window is closed 
    window.addEventListener('beforeunload', function() {
        var content = document.getElementById('notepad').innerText;
        localStorage.setItem('notepadContent', content);
    });

    // Toggle visibility when the "Toggle" button is clicked
    document.getElementById('btnToggle').addEventListener('click', function() {
        var notepadContainer = document.getElementById('notepad-container');
        notepadContainer.style.display = notepadContainer.style.display === 'none' ? 'block' : 'none';

        // Toggle the visibility of the buttons inside the notepad container
        document.getElementById('btnSave').style.display = notepadContainer.style.display === 'block' ? 'block' : 'none';
        document.getElementById('btnReopen').style.display = notepadContainer.style.display === 'block' ? 'none' : 'block';
        document.getElementById('btnClear').style.display = notepadContainer.style.display === 'block' ? 'block' : 'none';

        // Hide the "Toggle" button
        document.getElementById('btnToggle').style.display = 'none';
    });

    //  show only the "Reopen" button on page load
    document.getElementById('btnReopen').style.display = 'block';

    // Reopen the notepad when the "Reopen" button is clicked
    document.getElementById('btnReopen').addEventListener('click', function() {
        var notepadContainer = document.getElementById('notepad-container');
        notepadContainer.style.display = 'block';

        // Toggle the visibility of the buttons inside the notepad container
        document.getElementById('btnSave').style.display = 'block';
        document.getElementById('btnReopen').style.display = 'none';
        document.getElementById('btnClear').style.display = 'block';

        // Show the "Toggle" button
        document.getElementById('btnToggle').style.display = 'block';
    });

    // Clear notes when the "Clear Notes" button is clicked from local storage
    document.getElementById('btnClear').addEventListener('click', function() {
        var notepad = document.getElementById('notepad');
        notepad.innerText = '';
        localStorage.removeItem('notepadContent');
        alert('Notes cleared!');
    });