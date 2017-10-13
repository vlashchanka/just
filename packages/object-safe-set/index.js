module.exports = set;

/*
  var obj1 = {};
  set(obj1, 'a.aa.aaa', 4}); // true
  obj1; // {a: {aa: {aaa: 4}}}

  var obj2 = {};
  set(obj2, [a, aa, aaa], 4}); // true
  obj2; // {a: {aa: {aaa: 4}}}

  var obj3 = {a: {aa: {aaa: 2}}};
  set(obj3, 'a.aa.aaa', 3); // true
  obj3; // {a: {aa: {aaa: 3}}}

  var obj4 = {a: {aa: {aaa: 2}}};
  set(obj4, 'a.aa', {bbb: 7}); // true
  obj4; // {a: {aa: {bbb: 7}}}

  const obj5 = {a: {}};
  const sym = Symbol();
  set(obj5.a, sym, 7); // true
  obj5; // {a: {Symbol(): 7}}
*/

function set(obj, props, value) {
  if (typeof props == 'string') {
    props = props.split('.');
  }
  if (typeof props == 'symbol') {
    props = [props];
  }
  var lastProp = props.pop();
  if (!lastProp) {
    return false;
  }
  var thisProp;
  while ((thisProp = props.shift())) {
    obj = obj[thisProp];
    if (!obj || typeof obj != 'object') {
      return false;
    }
  }
  obj[lastProp] = value;
  return true;
}
