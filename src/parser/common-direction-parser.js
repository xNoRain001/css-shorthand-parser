// margin: 10px;
// margin: 10px 20px;
// margin: 10px 20px 30px;
// margin: 10px 20px 30px 40px;
const commonDirectionParser = (value, prefix, suffix) => {
  let res = {}
  const segments = value.split(' ')
  const { length } = segments
  const [v1, v2, v3, v4] = segments

  suffix = suffix ? `-${ suffix }` : ''

  if (length === 1) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v1
    res[`${ prefix }-bottom${ suffix }`] = v1
    res[`${ prefix }-left${ suffix }`] = v1
  } else if (length === 2) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v1
    res[`${ prefix }-left${ suffix }`] = v2
  } else if (length === 3) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v3
    res[`${ prefix }-left${ suffix }`] = v2
  } else {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v3
    res[`${ prefix }-left${ suffix }`] = v4
  }

  return res
}

export default commonDirectionParser
