"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertEuroToEuroCents = void 0;
// Converts a price in euros to the corresponding amount in euro cents
function convertEuroToEuroCents(price) {
    const euroAmount = parseFloat(price.replace(/\./g, "").replace(",", "."));
    const euroCents = euroAmount * 100;
    const euroCentsRounded = Math.round(euroCents);
    return euroCentsRounded;
}
exports.convertEuroToEuroCents = convertEuroToEuroCents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydF9ldXJvX3RvX2V1cm9fY2VudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaGVscGVycy9jdXJyZW5jeS9jb252ZXJ0X2V1cm9fdG9fZXVyb19jZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFBc0U7QUFDdEUsU0FBZ0Isc0JBQXNCLENBQUMsS0FBYTtJQUNsRCxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFFLE1BQU0sU0FBUyxHQUFHLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDbkMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQztBQU5ELHdEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29udmVydHMgYSBwcmljZSBpbiBldXJvcyB0byB0aGUgY29ycmVzcG9uZGluZyBhbW91bnQgaW4gZXVybyBjZW50c1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRFdXJvVG9FdXJvQ2VudHMocHJpY2U6IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IGV1cm9BbW91bnQgPSBwYXJzZUZsb2F0KHByaWNlLnJlcGxhY2UoL1xcLi9nLCBcIlwiKS5yZXBsYWNlKFwiLFwiLCBcIi5cIikpO1xuICBjb25zdCBldXJvQ2VudHMgPSBldXJvQW1vdW50ICogMTAwO1xuICBjb25zdCBldXJvQ2VudHNSb3VuZGVkID0gTWF0aC5yb3VuZChldXJvQ2VudHMpO1xuXG4gIHJldHVybiBldXJvQ2VudHNSb3VuZGVkO1xufVxuIl19