import { Route, Routes } from 'react-router-dom';
import './icons.js';
import ROUTES from './const/routes';
import FourZeroFour from './404.js';
import Portfolio from './portfolio';

// Data Structures
import LinkedList from './data-structures/linkedList';
import Trie from './data-structures/trie';

// Problems
import AddTwoNumbers from './problems/addTwoNumbers';
import CompoundWords from './problems/compoundWords';
import Flatten from './problems/flatten';
import FloodFill from './problems/floodFill';
import LongestCommonPrefix from './problems/longestCommonPrefix';
import LongestSubStringWithoutRepeatingCharacters from './problems/longestSubStringWithoutRepeatingCharacters';
import MedianOfTwoSortedArrays from './problems/medianOfTwoSortedArrays';
import MergeTwoSortedLists from './problems/mergeTwoSortedLists';
import NumberOfIslands from './problems/numberOfIslands';
import PalindromeNumber from './problems/palindromeNumber';
import TwoSum from './problems/twoSum';
import ReverseInteger from './problems/reverseInteger';
import ReverseString from './problems/reverseString';
import RomanToInteger from './problems/romanToInteger';
import ValidParentheses from './problems/validParentheses';
import ZigZag from './problems/zigZag';

// Games
import TicTacToe from './games/tic-tac-toe';

// Apps
import Recipes from './apps/recipes';
import StockPile from './apps/stock-pile';
import Stopwatch from './apps/stopwatch';
import StarWars from './apps/star-wars';

type Props = {
  showModal: boolean;
};

const PrimaryRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path={ROUTES.default} element={<Portfolio {...props} />} />
      <Route path={ROUTES.linkedList} element={<LinkedList {...props} />} />
      <Route path={ROUTES.trie} element={<Trie {...props} />} />
      <Route path={ROUTES.problems.twoSum} element={<TwoSum {...props} />} />
      <Route path={ROUTES.problems.addTwoNumbers} element={<AddTwoNumbers {...props} />} />
      <Route path={ROUTES.problems['compound-words']} element={<CompoundWords {...props} />} />
      <Route
        path={ROUTES.problems.longestSubstringWithoutRepeatingCharacters}
        element={<LongestSubStringWithoutRepeatingCharacters {...props} />}
      />
      <Route path={ROUTES.problems['median-of-two-sorted-arrays']} element={<MedianOfTwoSortedArrays {...props} />} />
      <Route path={ROUTES.problems.zigzag} element={<ZigZag {...props} />} />
      <Route path={ROUTES.problems['reverse-string']} element={<ReverseString {...props} />} />
      <Route path={ROUTES.problems['reverse-integer']} element={<ReverseInteger {...props} />} />
      <Route path={ROUTES.problems['number-of-islands']} element={<NumberOfIslands {...props} />} />
      <Route path={ROUTES.problems['palindrome-number']} element={<PalindromeNumber {...props} />} />
      <Route path={ROUTES.problems['roman-to-integer']} element={<RomanToInteger {...props} />} />
      <Route path={ROUTES.problems['longest-common-prefix']} element={<LongestCommonPrefix {...props} />} />
      <Route path={ROUTES.problems['valid-parentheses']} element={<ValidParentheses {...props} />} />
      <Route path={ROUTES.problems['merge-two-sorted-lists']} element={<MergeTwoSortedLists {...props} />} />
      <Route path={ROUTES.problems.flatten} element={<Flatten {...props} />} />
      <Route path={ROUTES.problems.floodFill} element={<FloodFill {...props} />} />
      <Route path={ROUTES.games['tic-tac-toe']} element={<TicTacToe {...props} />} />
      <Route path={ROUTES.apps['recipes']} element={<Recipes {...props} />} />
      <Route path={ROUTES.apps['stock-pile']} element={<StockPile {...props} />} />
      <Route path={ROUTES.apps.stopwatch} element={<Stopwatch {...props} />} />
      <Route path={ROUTES.apps['star-wars']} element={<StarWars />} />
      <Route path="*" element={<FourZeroFour />} />
    </Routes>
  );
};
export default PrimaryRoutes;
