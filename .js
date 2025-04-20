@RestController
@RequestMapping("/api")
public class MessageController {

  private List<String> messages = new ArrayList<>();

  @PostMapping("/send")
  public ResponseEntity<String> sendMessage(@RequestBody String msg) {
      messages.add(msg);
      return ResponseEntity.ok("Message reçu");
  }

  @GetMapping("/all")
  public List<String> getMessages() {
      return messages;
  }
}