    const marker = markRange(layers.patch);
    const patch = new Patch({status: 'modified', hunks, marker});

    assert.strictEqual(filePatch.getMarker(), marker);
  it('returns the starting range of the patch', function() {
    const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n'});
        oldStartRow: 2, oldRowCount: 1, newStartRow: 2, newRowCount: 3,
        marker: markRange(layers.hunk, 1, 3),
          new Unchanged(markRange(layers.unchanged, 1)),
          new Addition(markRange(layers.addition, 2, 3)),
    const marker = markRange(layers.patch, 1, 3);
    const patch = new Patch({status: 'modified', hunks, buffer, layers, marker});
    assert.deepEqual(filePatch.getStartRange().serialize(), [[1, 0], [1, 0]]);
  describe('buildStagePatchForLines()', function() {
    let stagedLayeredBuffer;

    beforeEach(function() {
      const buffer = new TextBuffer();
      const layers = buildLayers(buffer);
      stagedLayeredBuffer = {buffer, layers};
    });

      const marker = markRange(layers.patch, 0, 4);
      const patch = new Patch({status: 'modified', hunks, marker});
      const stagedPatch = filePatch.buildStagePatchForLines(buffer, stagedLayeredBuffer, new Set([1, 3]));
      assert.strictEqual(stagedLayeredBuffer.buffer.getText(), '0000\n0001\n0003\n0004\n');
      assertInFilePatch(stagedPatch, stagedLayeredBuffer.buffer).hunks(
      let buffer;
        buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const marker = markRange(layers.patch, 0, 2);
        const patch = new Patch({status: 'deleted', hunks, marker});
        const stagedPatch = deletionPatch.buildStagePatchForLines(buffer, stagedLayeredBuffer, new Set([1, 2]));
        assert.strictEqual(stagedLayeredBuffer.buffer.getText(), '0000\n0001\n0002\n');
        assertInFilePatch(stagedPatch, stagedLayeredBuffer.buffer).hunks(
        const stagedPatch = deletionPatch.buildStagePatchForLines(buffer, stagedLayeredBuffer, new Set([0, 1, 2]));
        assert.strictEqual(stagedLayeredBuffer.buffer.getText(), '0000\n0001\n0002\n');
        assertInFilePatch(stagedPatch, stagedLayeredBuffer.buffer).hunks(
        const nBuffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const layers = buildLayers(nBuffer);
        const marker = markRange(layers.patch, 0, 2);
        const patch = new Patch({status: 'deleted', hunks, marker});
        const stagedPatch = replacePatch.buildStagePatchForLines(nBuffer, stagedLayeredBuffer, new Set([0, 1, 2]));
  describe('getUnstagePatchForLines()', function() {
    let unstageLayeredBuffer;
    beforeEach(function() {
      const buffer = new TextBuffer();
      const layers = buildLayers(buffer);
      unstageLayeredBuffer = {buffer, layers};
    });
      const marker = markRange(layers.patch, 0, 4);
      const patch = new Patch({status: 'modified', hunks, marker});
      const unstagedPatch = filePatch.buildUnstagePatchForLines(buffer, unstageLayeredBuffer, new Set([1, 3]));
      assert.strictEqual(unstageLayeredBuffer.buffer.getText(), '0000\n0001\n0002\n0003\n0004\n');
      assertInFilePatch(unstagedPatch, unstageLayeredBuffer.buffer).hunks(
      let buffer;
        buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const marker = markRange(layers.patch, 0, 2);
        addedPatch = new Patch({status: 'added', hunks, marker});
        const unstagePatch = addedFilePatch.buildUnstagePatchForLines(buffer, unstageLayeredBuffer, new Set([2]));
        assertInFilePatch(unstagePatch, unstageLayeredBuffer.buffer).hunks(
        const unstagePatch = addedFilePatch.buildUnstagePatchForLines(buffer, unstageLayeredBuffer, new Set([0, 1, 2]));
        assertInFilePatch(unstagePatch, unstageLayeredBuffer.buffer).hunks(
        const unstagePatch = patch.buildUnstagePatchForLines(buffer, unstageLayeredBuffer, new Set([0, 1, 2]));
        assertInFilePatch(unstagePatch, unstageLayeredBuffer.buffer).hunks(
      let oldFile, removedFilePatch, buffer;
        buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const marker = markRange(layers.patch, 0, 2);
        const removedPatch = new Patch({status: 'deleted', hunks, marker});
        const discardPatch = removedFilePatch.buildUnstagePatchForLines(buffer, unstageLayeredBuffer, new Set([1]));
        assertInFilePatch(discardPatch, unstageLayeredBuffer.buffer).hunks(
        const discardPatch = removedFilePatch.buildUnstagePatchForLines(
          buffer,
          unstageLayeredBuffer,
          new Set([0, 1, 2]),
        );
        assertInFilePatch(discardPatch, unstageLayeredBuffer.buffer).hunks(
  describe('toStringIn()', function() {
      const marker = markRange(layers.patch, 0, 7);
      const patch = new Patch({status: 'modified', hunks, marker});
      assert.strictEqual(filePatch.toStringIn(buffer), expectedString);
      const marker = markRange(layers.patch, 0, 2);
      const patch = new Patch({status: 'modified', hunks, marker});
      assert.strictEqual(filePatch.toStringIn(buffer), expectedString);
        const marker = markRange(layers.patch, 0, 1);
        const patch = new Patch({status: 'added', hunks, marker});
        assert.strictEqual(filePatch.toStringIn(buffer), expectedString);
        const marker = markRange(layers.patch, 0, 1);
        const patch = new Patch({status: 'deleted', hunks, marker});
        assert.strictEqual(filePatch.toStringIn(buffer), expectedString);
    assert.isFalse(nullFilePatch.buildStagePatchForLines(new Set([0])).isPresent());
    assert.isFalse(nullFilePatch.buildUnstagePatchForLines(new Set([0])).isPresent());
    assert.strictEqual(nullFilePatch.toStringIn(new TextBuffer()), '');
    patch: buffer.addMarkerLayer(),