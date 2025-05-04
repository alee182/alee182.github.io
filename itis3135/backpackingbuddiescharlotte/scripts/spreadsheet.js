
        const form = document.getElementById('gearForm');
        const gearBody = document.getElementById('gearBody');
        const totalWeightCell = document.getElementById('totalWeight');
      
        let totalOunces = 0; 
      
        function formatWeight(ounces) {
          const lbs = Math.floor(ounces / 16);
          const oz = Math.round(ounces % 16);
          return `${lbs} lbs ${oz} oz`;
        }
      
        form.addEventListener('submit', function(e) {
          e.preventDefault();
      
          const name = document.getElementById('gearName').value.trim();
          const lbs = parseInt(document.getElementById('gearLbs').value) || 0;
          const oz = parseInt(document.getElementById('gearOz').value) || 0;
      
          if (!name || lbs < 0 || oz < 0 || oz >= 16) {
            alert("Enter a valid gear name, pounds (>= 0), and ounces (0-15).");
            return;
          }
      
          const gearOunces = (lbs * 16) + oz;
      
          // Add row to table
          const row = gearBody.insertRow();
          row.insertCell(0).textContent = name;
          row.insertCell(1).textContent = formatWeight(gearOunces);
      
          // Update total
          totalOunces += gearOunces;
          totalWeightCell.textContent = formatWeight(totalOunces);
      
          // Reset form
          form.reset();
        });