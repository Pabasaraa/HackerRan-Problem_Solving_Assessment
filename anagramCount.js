/**
  An anagram of a string is another string with the same characters in the same frequency, in any order. For example 'abc', 'bca', 'acb', 'bac', 'cba', 'cab' are all anagrams of the string 'abc'.
  Given two arrays of strings, for every string in one list, determine how many anagrams of it are in the other list. Write a function that receives dictionary and query, two string arrays.
  It should return an array of integers where each element / contains the number of anagrams of query[i] that exist in dictionary.

  Example:
    dictionary = ['hack', 'a', 'rank', 'khac', 'ackh', 'kran', 'rankhacker', 'a', 'ab', 'ba', 'stairs', 'raits'] query = ["a", "nark", "bs", "hack", "stair"]
    query[0] = 'a' has 2 anagrams in dictionary. 'a' and 'a'
    query[1] = 'nark' has 2 anagrams in dictionary. 'rank' and 'kran'.
    query[2] = 'bs' has 0 anagrams in dictionary. query[3] = 'hack' has 3 anagrams in dictionary. 'hack', 'khac' and 'ackh'.
    query[4] = 'stair' has 1 anagram in dictionary: 'raits'. While the characters are the same in 'stairs, the frequency of 's' differs, so it is not an anagram.
    The final answer is [2, 2, 0, 3, 1]

**/

// Brute force way to do the same
// Time complexity: O(n * m) where n is the length of the dictionary and m is the length of the query array
function anagramCountMethod1(dictionary, query) {
  let noOfAnagrams = [];

  for(let i in query) {
    let totalAnagrams = 0;
    for(let word of dictionary) {
      if(query[i].split('').sort().join('') === word.split('').sort().join('')) {
         totalAnagrams++;
      }
    }
    
    noOfAnagrams.push(totalAnagrams);
  }

  return(noOfAnagrams);
}


// More efficient way to do the same
// Using objects to store the count of each anagram
// and then using the query to get the count of each anagram
// in the query array
// Time complexity: O(n + m) where n is the length of the dictionary and m is the length of the query array
function anagramCountMethod2(dictionary, query) {
    const counts = {};
    for (const word of dictionary) {
        const sortedWord = word.split('').sort().join('');
        counts[sortedWord] = (counts[sortedWord] || 0) + 1;
    }
    return query.map(word => {
        const sortedWord = word.split('').sort().join('');
        return counts[sortedWord] || 0;
    });
}


// Same as above but using a for loop instead of map
// Time complexity: O(n + m) where n is the length of the dictionary and m is the length of the query array
function anagramCountMethod3(dictionary, query) {
  const count = {};
  let eachNoOfAnagrams = [];
  
  for(let i in dictionary) {
    let sortedWord = dictionary[i].split('').sort().join('');
    if(!count[sortedWord]) {
      count[sortedWord] = 0;
    }
    count[sortedWord]++;
  }

  query.map(word => {
    eachNoOfAnagrams.push(count[word.split('').sort().join('')] || 0);
  });

  return eachNoOfAnagrams;
}