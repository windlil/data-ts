
class hashTable<T = any> {
  private storage: [string, T][][] = []
  private length: number = 7
  private count: number = 0

  constructor() {

  }

  private getIndex(key: string, max: number = this.length) {
    const length = key.length
    let hashCode = 0
    for (let i = 0; i < length; i++) {
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }
  
    const index = hashCode % max

    return index
  }

  private getBucket(index: number) {
    let bucket = this.storage[index]
    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    return bucket
  }

  private forEachBucket(bucket: [string, T][], func: any, context: any) {
    for (let i = 0; i < bucket.length; i++) {
      return func.call(context, i)
    }
  }

  put(key: string, value: T) {
    const index = this.getIndex(key)
    let bucket = this.getBucket(index)

    let isUpdate = false

    this.forEachBucket(bucket, (i: number) => {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (key === tupleKey) {
        tuple[1] = value
        isUpdate = true
      }
    }, this)

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++
    }
  }

  get(key: string): T | undefined {
    const index = this.getIndex(key)
    const bucket = this.storage[index]

    if (!bucket) return undefined

    const result = this.forEachBucket(bucket, (i: number) => {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (key === tupleKey) {
        return tuple[1]
      }
    }, this)

    if (result) return result

    return undefined
  }

  delete(key: string): T | undefined {
    const index = this.getIndex(key)
    const bucket = this.storage[index]

    if (!bucket) return undefined

    const result = this.forEachBucket(bucket, (i: number) => {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (key === tupleKey) {
        const deleteValue = tuple[1]
        tuple.splice(i, 1)
        this.count-- 
        return deleteValue
      }
    }, this)
    if (result) return result
    return undefined
  }
}


export default hashTable