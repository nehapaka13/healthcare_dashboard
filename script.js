document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('diagnosisChart').getContext('2d');
    
    if (!ctx) {
      console.error('Failed to get context. Ensure the canvas ID is correct.');
      return;
    }
  
    console.log('Chart.js context:', ctx); // Check if context is retrieved
  
    new Chart(ctx, {
      type: 'line', // Line chart type
      data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan'], // x-axis labels (months)
        datasets: [
          {
            label: 'Systolic', // Dataset for systolic blood pressure
            data: [120, 130, 140, 160], // Data points for systolic blood pressure
            borderColor: 'rgba(57, 73, 171, 1)', // Line color for systolic
            fill: false, // No fill below the line
          },
          {
            label: 'Diastolic', // Dataset for diastolic blood pressure
            data: [80, 85, 78, 90], // Data points for diastolic blood pressure
            borderColor: 'rgba(255, 99, 132, 1)', // Line color for diastolic
            fill: false, // No fill below the line
          }
        ]
      },
      options: {
        responsive: true, // Make the chart responsive
        plugins: {
          legend: {
            display: true, // Display the chart legend
          },
        }
      }
    });
  
    // Fetch data for all patients (example)
    const username = 'coalition';
    const password = 'skills-test';
    const base64Credentials = btoa(`${username}:${password}`);
    const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
      },
    })
      .then(response => response.json()) // Parse JSON response
      .then(data => {
        const jessicaData = data.find(patient => patient.name === 'Jessica Taylor');
        if (jessicaData) {
          console.log(jessicaData); // Check if data is retrieved successfully
        } else {
          console.error('Jessica Taylor data not found');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  