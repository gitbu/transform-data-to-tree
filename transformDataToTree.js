const mockData = {
  datas: [
    [
      {
        people: {
          name: '张三'
        }
      }
    ],
    [
      {
        people: {
          name: '李四'
        }
      }
    ]
  ],
  meta: {
    a: {
      b: {
        c: {
          m: 2,
          n: 3
        }
      }
    }
  }
};

function is(type, data) {
  return ![null].includes(data) && data.constructor.name === type 
 }

function transformDataToTree(data, index = 0) {
  const result = [];

  if (is('Object', data)) {
    const keys = Object.keys(data);
    keys.forEach((key, index) => {
      result.push({
        label: key,
        key,
        value: key,
      });
      const res = transformDataToTree(data[key], index);
      if (res.length > 0) {
        result[index].chidren = res;
      }
    })
  }

  if (is('Array', data)) return transformDataToTree(data[0], index);

  return result;
}

const ret = transformDataToTree(mockData)

console.log(JSON.stringify(ret));