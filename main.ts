import { Plugin } from 'obsidian';

export default class LuaAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["lua"], "markdown");
  }
}
