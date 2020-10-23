import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const IMPLEMENTATION = [
  `const findMedianSortedArrays = (nums1, nums2) => {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  const isOdd = nums3.length % 2 === 1;
  const firstNum = nums3[Math.floor((nums3.length - 1) / 2)];
  const secondNum = nums3[Math.floor(nums3.length / 2)];
  return isOdd ? firstNum : (firstNum + secondNum) / 2;
};`,
  `const findMedianSortedArraysBinarySearch = (nums1, nums2) => {
  if (nums2.length < nums1.length) {
    return findMedianSortedArraysBinarySearch(nums2, nums1);
  }
  let start = 0;
  let end = nums1.length;

  while (start <= end) {
    const partitionX = (end + start) >> 1;
    const partitionY = ((nums1.length + nums2.length + 1) >> 1) - partitionX;

    const maxLeftX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const maxLeftY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

    const minRightX =
      partitionX === nums1.length
        ? Number.POSITIVE_INFINITY
        : nums1[partitionX];
    const minRightY =
      partitionY === nums2.length
        ? Number.POSITIVE_INFINITY
        : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      const lowMax = Math.max(maxLeftX, maxLeftY);
      if ((nums1.length + nums2.length) % 2 === 1) {
        return lowMax;
      }
      return (lowMax + Math.min(minRightX, minRightY)) / 2;
    } else if (maxLeftX < minRightY) {
      start = partitionX + 1;
    } else {
      end = partitionX - 1;
    }
  }
};`,
];

const Code = () => {
  return (
    <>
      <h3>Implementation 1</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION[0]}
        </SyntaxHighlighter>
      </div>
      <h3>Implementation 2</h3>
      <div className="código-row">
        <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLines={true}>
          {IMPLEMENTATION[1]}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
