import { useLocation } from 'react-router-dom';
import ROUTES from '../const/routes';
import NavLink from './nav-link';

const NavLinks = ({ onClick }) => {
  const { pathname } = useLocation();

  return (
    <div className="código-animate-top código-card-4 código-white">
      <div>
        <NavLink onClick={onClick(ROUTES.default)} isActive={pathname === ROUTES.default} text="Portfolio" />
        <h4 className="código-center código-border-bottom código-padding-top-2">Data Structures</h4>
        <NavLink onClick={onClick(ROUTES.linkedList)} isActive={pathname === ROUTES.linkedList} text="Linked list" />
        <NavLink onClick={onClick(ROUTES.trie)} isActive={pathname === ROUTES.trie} text="Trie" />
        <h4 className="código-center código-border-bottom código-padding-top-2">Problems</h4>
        <NavLink onClick={onClick(ROUTES.problems.twoSum)} isActive={pathname === ROUTES.problems.twoSum} text="Two sum" />
        <NavLink
          onClick={onClick(ROUTES.problems.addTwoNumbers)}
          isActive={pathname === ROUTES.problems.addTwoNumbers}
          text="Add two numbers"
        />
        <NavLink
          onClick={onClick(ROUTES.problems.longestSubstringWithoutRepeatingCharacters)}
          isActive={pathname === ROUTES.problems.longestSubstringWithoutRepeatingCharacters}
          text="Longest substring without repeating characters"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['median-of-two-sorted-arrays'])}
          isActive={pathname === ROUTES.problems['median-of-two-sorted-arrays']}
          text="Median of two sorted arrays"
        />
        <NavLink onClick={onClick(ROUTES.problems.zigzag)} isActive={pathname === ROUTES.problems.zigzag} text="ZigZag conversion" />
        <NavLink
          onClick={onClick(ROUTES.problems['reverse-integer'])}
          isActive={pathname === ROUTES.problems['reverse-integer']}
          text="Reverse integer"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['number-of-islands'])}
          isActive={pathname === ROUTES.problems['number-of-islands']}
          text="Number of islands"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['palindrome-number'])}
          isActive={pathname === ROUTES.problems['palindrome-number']}
          text="Palindrome number"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['roman-to-integer'])}
          isActive={pathname === ROUTES.problems['roman-to-integer']}
          text="Roman to integer"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['longest-common-prefix'])}
          isActive={pathname === ROUTES.problems['longest-common-prefix']}
          text="Longest common prefix"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['valid-parentheses'])}
          isActive={pathname === ROUTES.problems['valid-parentheses']}
          text="Valid parentheses"
        />
        <NavLink
          onClick={onClick(ROUTES.problems['merge-two-sorted-lists'])}
          isActive={pathname === ROUTES.problems['merge-two-sorted-lists']}
          text="Merge two sorted lists"
        />
        <NavLink onClick={onClick(ROUTES.problems.flatten)} isActive={pathname === ROUTES.problems.flatten} text="Flatten" />
        <NavLink onClick={onClick(ROUTES.problems.floodFill)} isActive={pathname === ROUTES.problems.floodFill} text="Flood Fill" />
        <h4 className="código-center código-border-bottom código-padding-top-2">Game</h4>
        <NavLink onClick={onClick(ROUTES.games['tic-tac-toe'])} isActive={pathname === ROUTES.games['tic-tac-toe']} text="Tic-Tac-Toe" />
        <h4 className="código-center código-border-bottom código-padding-top-2">Apps</h4>
        <NavLink onClick={onClick(ROUTES.apps['recipes'])} isActive={pathname === ROUTES.apps['recipes']} text="Recipes" />
        <NavLink onClick={onClick(ROUTES.apps['stock-pile'])} isActive={pathname === ROUTES.apps['stock-pile']} text="Stock pile" />
        <NavLink onClick={onClick(ROUTES.apps.stopwatch)} isActive={pathname === ROUTES.apps.stopwatch} text="Stopwatch" />
      </div>
    </div>
  );
};
export default NavLinks;
