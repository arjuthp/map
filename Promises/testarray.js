// const myArr = []
// %DebugPrint(myArr)


//  //output
/**TWO TYPES OF ARRAY IN JAVASCRIPT
 * 1) CONSTINUOUS
 * 2) HOLEY ARRAY
 * 
 * ARRAY IN JS IS 3 TYPES 
 *  1. SMI(small integer)
 *  2. Packed element
 *  3.Double(float,string, function) 
 * 
 */
const arrTwo = [1,2,4,5,,6,7]//Packed SMI Elements(Default)
// const arrTwo = [1,2,,,4,5]//holed elements
arrTwo.push(6.0) //this is Packed Bouble Elements as it has double pack values

arrTwo.push('7') //this is Packed _elements

arrTwo[10]=11 //HOLEYeLEMENTS
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//bound check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype, 10)
//hasOwnProperty(Object.prototype, 10)


//holes are very expensive


//optimization order
//SMI>DOUBLE>PACKED
//H_SMI > H_DOUBLE> H_PACKED

















/***                                                                                                                    
┌──(kali㉿kali)-[~/Documents/JS_PRATICE/map/Promises]
└─$ ~/.jsvu/bin/v8-debug testarray.js 
testarray.js:1: ReferenceError: DebugPrint is not defined
const myArr = []
              ^
ReferenceError: DebugPrint is not defined
    at testarray.js:1:15

                                                                                                                    
┌──(kali㉿kali)-[~/Documents/JS_PRATICE/map/Promises]
└─$ ~/.jsvu/bin/v8-debug testarray.js --allow-natives-syntax
testarray.js:1: ReferenceError: DebugPrint is not defined
const myArr = []
              ^
ReferenceError: DebugPrint is not defined
    at testarray.js:1:15

                                                                                                                    
┌──(kali㉿kali)-[~/Documents/JS_PRATICE/map/Promises]
└─$ ~/.jsvu/bin/v8-debug  --allow-natives-syntax testarray.js 
testarray.js:1: ReferenceError: DebugPrint is not defined
const myArr = []
              ^
ReferenceError: DebugPrint is not defined
    at testarray.js:1:15

                                                                                                                    
┌──(kali㉿kali)-[~/Documents/JS_PRATICE/map/Promises]
└─$ ~/.jsvu/bin/v8-debug  --allow-natives-syntax             
V8 version 14.6.76
d8> const arr = []
undefined
d8> %DebugPrint(arr)   
DebugPrint: 0x35e80104afc1: [JSArray]
 - map: 0x35e801027c9d <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
 - prototype: 0x35e801027cc5 <JSArray[0]>
 - elements: 0x35e8000007bd <FixedArray[0]> [PACKED_SMI_ELEMENTS]
 - length: 0
 - properties: 0x35e8000007bd <FixedArray[0]>
 - All own properties (excluding elements): {
    0x35e800000df1: [String] in ReadOnlySpace: #length: 0x35e80086efdd <AccessorInfo name= 0x35e800000df1 <String[6]: #length>, data= 0x35e800000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
 }
0x35e801027c9d: [Map] in OldSpace
 - map: 0x35e80101fba9 <MetaMap (0x35e80101fbf9 <NativeContext[306]>)>
 - type: JS_ARRAY_TYPE
 - instance size: 16
 - inobject properties: 0
 - unused property fields: 0
 - elements kind: PACKED_SMI_ELEMENTS
 - enum length: invalid
 - back pointer: 0x35e800000011 <undefined>
 - prototype_validity_cell: 0x35e800000ac9 <Cell value= [cleared]>
 - instance descriptors #1: 0x35e8010282e1 <DescriptorArray[1]>
 - transitions #1: 0x35e801028301 <TransitionArray[5]>
   Transitions #1:
     0x35e800000e8d <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x35e80102831d <Map[16](HOLEY_SMI_ELEMENTS)>
 - prototype: 0x35e801027cc5 <JSArray[0]>
 - constructor: 0x35e801027bed <JSFunction Array (sfi = 0x35e80087476d)>
 - dependent code: 0x35e8000007cd <Other heap object (WEAK_ARRAY_LIST_TYPE)>
 - construction counter: 0

undefined
d8> 
 */