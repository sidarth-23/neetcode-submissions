class MyHashSet:
    def __init__(self):
        self.capacity = 8
        self.size = 0
        self.threshold = 0.75
        self.hashmap = [[] for _ in range(self.capacity)]

    def add(self, key: int) -> None:
        index = self._hash(key)
        bucket = self.hashmap[index]

        if key not in bucket:
            bucket.append(key)
            self.size += 1
        
        if self.size / self.capacity > self.threshold:
            self._resize()

    def remove(self, key: int) -> None:
        index = self._hash(key)
        bucket = self.hashmap[index]

        if key in bucket:
            bucket.remove(key)
            self.size -=1

    def contains(self, key: int) -> bool:
        index = self._hash(key)
        bucket = self.hashmap[index]

        if key in bucket:
            return True
        return False
    
    def _hash(self, key: int) -> int:
        return hash(key) % self.capacity

    def _resize(self):
        self.capacity *= 2
        new_hashmap = [[] for _ in range(self.capacity)]
        for bucket in self.hashmap:
            for item in bucket:
                new_index = self._hash(item) % self.capacity
                new_hashmap[new_index].append(item)
        self.hashmap = new_hashmap
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)