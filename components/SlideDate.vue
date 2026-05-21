<script setup lang="ts">
import { computed } from "vue"
import { useNav } from "@slidev/client"

const props = defineProps({
  date: { type: String, default: "" },
  format: { type: String, default: "ja" },
})

const { isPrintMode } = useNav()

function formatDate(d: string, format: string): string {
  if (d.length !== 8) return d

  const year = d.slice(0, 4)
  const month = d.slice(4, 6)
  const day = d.slice(6, 8)

  switch (format) {
    case "ja":
      return `${year}年${parseInt(month)}月${parseInt(day)}日`
    case "slash":
      return `${year}/${month}/${day}`
    case "dot":
      return `${year}.${month}.${day}`
    case "hyphen":
      return `${year}-${month}-${day}`
    default:
      return `${year}年${parseInt(month)}月${parseInt(day)}日`
  }
}

function getTodayYYYYMMDD(): string {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, "0")
  const d = String(now.getDate()).padStart(2, "0")
  return `${y}${m}${d}`
}

const formattedDate = computed(() => {
  const targetDate = isPrintMode.value && props.date ? props.date : getTodayYYYYMMDD()
  return formatDate(targetDate, props.format)
})
</script>

<template>
  <span>{{ formattedDate }}</span>
</template>
