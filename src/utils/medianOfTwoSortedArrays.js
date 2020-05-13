const findMedianSortedArrays = (nums1, nums2) => {
  const nums3 = [...nums1, ...nums2].sort((a, b) => a - b);
  const isOdd = nums3.length % 2 === 1;
  const firstNum = nums3[Math.floor((nums3.length - 1) / 2)];
  const secondNum = nums3[Math.floor(nums3.length / 2)];
  return isOdd ? firstNum : (firstNum + secondNum) / 2;
};

export default findMedianSortedArrays;
