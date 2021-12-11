import { config } from ".";

test("should return config", () => {
  config({ looped: false });
});
