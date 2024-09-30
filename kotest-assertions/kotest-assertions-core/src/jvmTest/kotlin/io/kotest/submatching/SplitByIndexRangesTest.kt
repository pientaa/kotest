package io.kotest.submatching

import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe

class SplitByIndexRangesTest: StringSpec() {
   init {
       "handle one line" {
          val line = "The quick brown fox jumps over the lazy dog"
          splitByIndexRanges(
             line,
             listOf(IndexRange(0, 42))
          ) shouldBe listOf(line)
       }
      "handle multiple lines" {
         val line0 = "The quick brown fox"
         val line1 = "jumps over the lazy dog"
         splitByIndexRanges(
            "$line0\n$line1",
            listOf( IndexRange(0, 18),
               IndexRange(20, 42)
            )
         ) shouldBe listOf(line0, line1)
      }
   }
}