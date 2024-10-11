        let num = 0;
        let hrn = 0;
       
        function updateCount(){
            document.getElementById('num').innerText = num;
        }

        function updateTotal(){
            document.getElementById('tot').innerText = hrn;
        }

        function increaseCount(){
           num++;

           updateCount()
        }

        function reduceCount(){
            num -= 1;

           updateCount()
        }

        function increaseCountby2(){
            num +=2;
 
            updateCount()
        }
 
        function reduceCountby2(){
             num -= 2;
 
            updateCount()
        }

        function reset(){
            num = 0;
            
            updateCount()
        }

        function cleartotal(){
            hrn = 0;
            
            updateTotal()
        }

        function save(){
            hrn += num;

            updateTotal()
        
        }
        