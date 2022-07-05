const resultArray: number[] = [];

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  head: ListNode | null;

  constructor() {
    this.head = null;
  }

  addToTheLast(node: ListNode) {
    if (this.head == null) {
      this.head = node;
    } else {
      let temp: ListNode = this.head;
      while (temp.next != null) temp = temp.next;
      temp.next = node;
    }
  }

  printList() {
    let temp = this.head;
    while (temp != null) {
      resultArray.push(temp.val);
      temp = temp.next;
    }
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummyNode = new ListNode(0);

  let tail = dummyNode;
  while (true) {
    if (l1 == null) {
      tail.next = l2;
      break;
    }
    if (l2 == null) {
      tail.next = l1;
      break;
    }

    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }
  return dummyNode.next;
}

let llist1: LinkedList = new LinkedList();
let llist2: LinkedList = new LinkedList();

llist1.addToTheLast(new ListNode(5));
llist1.addToTheLast(new ListNode(10));
llist1.addToTheLast(new ListNode(15));

llist2.addToTheLast(new ListNode(2));
llist2.addToTheLast(new ListNode(3));
llist2.addToTheLast(new ListNode(20));

llist1.head = addTwoNumbers(llist1.head, llist2.head);
llist1.printList();
console.log(resultArray);
