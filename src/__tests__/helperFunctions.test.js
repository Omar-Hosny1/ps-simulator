import { formatPeriod } from "../utils/helper-functions";

describe("Test The Helpers Functions", () => {
  describe("Test The Time Period Function", () => {
    it("Should Return a Good Time Format", () => {
      expect(formatPeriod(5, 5)).toBe("05:05");
    });
    it("Should Return a Good Time Format", () => {
      expect(formatPeriod(10, 5)).toBe("10:05");
    });
    it("Should Return a Good Time Format", () => {
      expect(formatPeriod(5, 10)).toBe("05:10");
    });
  });
});
