document.addEventListener('DOMContentLoaded', function () {
    const planning = document.getElementById('planning');

    // Créer les jours de la semaine
    const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    daysOfWeek.forEach(day => {
        const dayCell = document.createElement('div');
        dayCell.classList.add('cell');
        dayCell.textContent = day;
        planning.appendChild(dayCell);
    });

    // Créer les cellules pour les tâches
    for (let i = 1; i <= 7; i++) {
        for (let j = 0; j < daysOfWeek.length; j++) {
            const taskCell = document.createElement('div');
            taskCell.classList.add('cell');
            taskCell.dataset.day = daysOfWeek[j];
            taskCell.dataset.week = i;
            taskCell.addEventListener('click', toggleTask);
            planning.appendChild(taskCell);
        }
    }

    // Fonction pour basculer l'état des tâches
    function toggleTask() {
        this.classList.toggle('task-assigned');
    }
});
