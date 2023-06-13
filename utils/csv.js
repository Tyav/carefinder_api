exports.csvMaker = function (data, headers) {

  // Empty array for storing the values
  const csvRows = [];

  if (!data.length) {
    return "";
  }
  
  const csvHeaders = headers.map(header => header.as)
  
  csvRows.push(csvHeaders.join(','));

  data.forEach((d) => {
    const row = headers.map(header => {
      const cell = header.location.split('.').reduce((acc, cur) => {
        if (Array.isArray(acc)) {
          return acc.map(res => res[cur] || "")
        }
        const result = acc[cur] || ""
        return result
      }, d);
      if (Array.isArray(cell)){
        return `[${cell.join('; ').replace(/,/g, ' -')}]`;
      }
      return cell.replace(/,/g, ' -');
    })
    csvRows.push(row.join(','))
  })
 
  // Returning the array joining with new line
  return csvRows.join('\n')
  }