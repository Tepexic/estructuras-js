// Clase nodo
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

// Clase de la lista vinculada
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Insertar valor al inicio
  unshift(data) {
    // La cabeza es el nuevo nodo, y el siguiente elemento es la cabeza anterior
    const n = new Node(data, this.head)
    this.head = n
    this.size++
    // Si la lista esta vacia, la cola tambien es la cabeza
    if(! this.tail) {
      this.tail = n
    }
  }

  // Insertar valor al final
  push(data) {
    const n = new Node(data)
    if(this.tail) {
      // La antigua cola apunta al nuevo nodo
      this.tail.next = n
    }
    // Actualizar la nueva cola
    this.tail = n
    // Si la lista esta vacia, la cabeza es la cola
    if(! this.head) {
      this.head = n
    }
    this.size++
  }

  // Insertar valor en indice especifico
  insert(data, index = 0) {
    if(index < 0) {
      console.error('Index should be >= 0')
      return
    }

    if(index > this.size - 1) {
      console.warn('Index bigger than list size. Inserting at the end')
      this.push(data)
      return
    }

    if(index === 0) {
      this.unshift(data)
      return
    }

    var counter = 0
    var current = this.head
    var previous

    while(counter < index) {
      previous = current
      current = current.next
      counter++
    }

    previous.next = new Node(data, current)
    this.size++
  }

  // Borrar nodo en indice especifico
  delete(index = 0) {
    if(index < 0) {
      console.error('Index should be >= 0')
      return
    }

    if(index > this.size - 1) {
      console.warn('Index bigger than list size. Deleting at the end')
      this.delete(this.size - 1)
      return
    }

    if(index === 0) {
      if(this.head === this.tail){
        this.tail = this.head.next
      }
      this.head = this.head.next
      this.size--
      return
    }

    var counter = 0
    var current = this.head
    var previous

    while(counter < index) {
      previous = current
      current = current.next
      counter++
    }

    previous.next = current.next

    if(counter === this.size - 1) {
      this.tail = previous
    }
    this.size--
  }

  search(data) {
    var current = this.head
    while(current) {
      if(current.data === data) {
        return current
      }
      current = current.next
    }
    return null
  }

  // Obtener nodo en indice especifico
  get(index) {
    var current = this.head
    var count = 0
    while(count < index) {
      count++
      current = current.next
    }
    return current
  }

  // Limpiar contenido de la lista
  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Imprimir contenido de la lista
  print() {
    var current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  // Convertir lista en arreglo con sus valores ordenados
  toArray() {
    const elements = []
    var current = this.head
    while (current) {
      elements.push(current.data)
      current = current.next
    }
    return elements
  }
}

ll = new LinkedList()
ll.push(1)
ll.unshift(2)
ll.unshift(2)
ll.unshift(2)
ll.insert(0,0)
ll.insert(100,100)
ll.insert(5,5)
console.log(ll.toArray())
ll.delete(5)
ll.delete(5)
ll.insert(100,100)
console.log(ll.search(5))
console.log(ll.search(100))
console.log(ll.toArray())
console.log(ll)