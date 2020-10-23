import LinkedListImage from '../../images/linkedlist.png';

const LinkedListDetail = () => {
  return (
    <>
      <p>
        In computer science, a <strong>linked list</strong> is a linear collection of data elements, whose order is not given by their
        physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes
        which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to
        the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the
        sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at
        arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as
        random access, is not feasible. Arrays have better cache locality compared to linked lists.
      </p>
      <img className="código-image" src={LinkedListImage} alt="trie" />
      <p>
        Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract
        data types, including lists, stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement those
        data structures directly without using a linked list as the basis.
      </p>
      <p>
        The principal benefit of a linked list over a conventional array is that the list elements can be easily inserted or removed without
        reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk,
        while restructuring an array at run-time is a much more expensive operation. Linked lists allow insertion and removal of nodes at
        any point in the list, and allow doing so with a constant number of operations by keeping the link previous to the link being added
        or removed in memory during list traversal.
      </p>
    </>
  );
};

export default LinkedListDetail;
