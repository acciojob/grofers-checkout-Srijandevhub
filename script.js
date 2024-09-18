const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const prices = document.querySelectorAll('.price');
            
            // Initialize total sum variable
            let total = 0;

            // Sum up all the prices
            prices.forEach(price => {
                total += parseFloat(price.textContent);
            });

            // Create a new row for the total
            const table = document.querySelector('table');
            const totalRow = document.createElement('tr');
            
            const totalData = document.createElement('td');
            totalData.colSpan = 2; // Make the cell span across 2 columns
            totalData.className = 'total';
			totalData.id = 'ans';
            totalData.textContent = `Total: Rs ${total.toFixed(2)}`;

            totalRow.appendChild(totalData);
            table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

