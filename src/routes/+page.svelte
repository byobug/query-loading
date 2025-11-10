<script lang="ts">
	import { queryA, queryB } from '$lib/data.remote';

    const isALoading = $derived(queryA().loading);
	const b = queryB();
    const isBLoading = $derived(b.loading);

    $inspect(isALoading, "A loading");
    $inspect(isBLoading, "B loading");

</script>

<h1>Refresh page: a expected to *not* be loading</h1>


<p>A: {isALoading ? "A Loading..." : queryA().current}</p>
<p>B: {isBLoading ? "B Loading..." : b.current}</p>
