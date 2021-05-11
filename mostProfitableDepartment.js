module.exports = function mostProfitableDepartment(salesData){
    var salesDataMap={};
      
  for(var i=0; i<salesData.length;i++){
      var salesData1= salesData[i]
      salesDataMap[salesData1.department]=0;
  }
  for(var i=0; i<salesData.length;i++){
      var salesData1= salesData[i]
      var currentDepTot=salesDataMap[salesData1.department];
      currentDepTot += salesData1.sales;
      salesDataMap[salesData1.department]=currentDepTot
  }
    var currentMaxSales=0
  var currentDepartment="";
  for( var salesDataDepartment in salesDataMap){
      
      var currentSalesDataDepartmentSales= salesDataMap[salesDataDepartment];
      if(currentSalesDataDepartmentSales> currentMaxSales){
          currentMaxSales=currentSalesDataDepartmentSales
          currentDepartment= salesDataDepartment;
      }
  }
    return currentDepartment
    }
   function mostProfitableDay(salesData){
     var salesDataMap={};
  for(var i=0; i<salesData.length;i++){
      
      var salesData1= salesData[i]
      salesDataMap[salesData1.day]=0;
  }
  for(var i=0; i<salesData.length;i++){
      var salesData1= salesData[i]
      var currentDayTot=salesDataMap[salesData1.day];
      currentDayTot += salesData1.sales;
      salesDataMap[salesData1.day]=currentDayTot
  }
  var currentMaxSales=0
  var currentDay="";
  for( var salesDataDay in salesDataMap){
      //console.log(salesDataMap[salesDataDepartment])
      var currentSalesDataDaySales= salesDataMap[salesDataDay];
      if(currentSalesDataDaySales> currentMaxSales){
          
          currentMaxSales=currentSalesDataDaySales
          currentDay= salesDataDay;
      }
  }
      return currentDay
    }