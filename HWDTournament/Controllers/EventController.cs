using AutoMapper;
using HWBTournament.API.ViewModels;
using HWBTournament.Data.Contracts;
using HWBTournament.Model.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HWBTournament.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Event")]
    [Authorize(Policy ="Bearer")]
    [ProducesResponseType(201)]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(401)]
    [ProducesResponseType(404)]
    public class EventController : Controller
    {
        private readonly IEventRepository _eventRepository;
        private readonly IMapper _mapper;
        //int page = 1;
        //int pageSize = 10;

        public EventController(IEventRepository eventRepository, IMapper mapper)
        {
            _eventRepository = eventRepository;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            Event _event = _eventRepository.GetSingle(u => u.Id == id);
            if (_event != null)
            {
                EventViewModel _eventVM = _mapper.Map<Event, EventViewModel>(_event);
                Log.Information("Event {@_eventVM} retrieved from database", _eventVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Data = _eventVM });
            }
            else
            {
                Log.Information("Could not find Event wit Id  {@id}", id);
                return NotFound();
            }
        }

        [HttpPost]
        public IActionResult Create([FromBody] EventViewModel eventvm)
        {
            if (!ModelState.IsValid || eventvm == null)
            {
                return BadRequest(ModelState);
            }

            Event _newevent = _mapper.Map<EventViewModel, Event>(eventvm);
            Event _newCreatedEvent = _eventRepository.CreateEvent(_newevent);


            if (_newCreatedEvent == null)
            {
                Log.Information("Error Inserting Event {@eventvm} Into database", eventvm);
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occuered Could not create Event " + _newevent.event_name, Data = _newevent });
            }
             EventViewModel _eventVM = _mapper.Map<Event, EventViewModel>(_newCreatedEvent);
            Log.Information("Event {@_eventVM} Inserted from database", _eventVM);
            return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Created Event: " + _eventVM.event_name, Data = _eventVM });
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Event _event = _eventRepository.GetSingle(u => u.Id == id);
            if (_event != null)
            {
                _eventRepository.Delete(_event);
                _eventRepository.Commit();
                EventViewModel _eventVM = _mapper.Map<Event, EventViewModel>(_event);
                Log.Information("Event {@_eventVM} Deleted from database", _eventVM);
                return new OkObjectResult(new ResultVM() { Status = Status.Success, Message = "Succesfully Deleted Event: " + _eventVM.event_name, Data = _eventVM });
            }
            else
            {
                Log.Information("Error Occured Deleting Event from database");
                return NotFound(new ResultVM() { Status = Status.Error, Message = "An Error Occured: ", Data = null });
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Event> _event = _eventRepository.GetEvents();
            if (_event != null)
            {
                IEnumerable<EventViewModel> _eventVM = _mapper.Map<IEnumerable<Event>, IEnumerable<EventViewModel>>(_event);
                Log.Information("Event {@_eventVM} retrieved from database", _eventVM);
                return new OkObjectResult(new ResultVM() { Data = _eventVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Retrieving Events from database");
                return NotFound(new ResultVM() { Data = "An Error Occured", Status = Status.Error });
            }
        }

        [HttpPatch]
        public IActionResult Update([FromBody] EventViewModel eventvm)
        {
            Event _event = _eventRepository.GetSingle(u => u.Id == eventvm.id);
            if (_event != null)
            {
                Event _updatedevent = _mapper.Map<EventViewModel, Event>(eventvm);
                _eventRepository.UpdateEvent(_updatedevent);
                EventViewModel _eventVM = _mapper.Map<Event, EventViewModel>(_event);
                Log.Information("Event {@_eventVM} Updated to database", _eventVM);
                return new OkObjectResult(new ResultVM() { Data = _eventVM, Status = Status.Success });
            }
            else
            {
                Log.Information("Error Occured Updating Event {@eventvm}", eventvm);
                return NotFound(new ResultVM() { Data = "An Error Occured", Status = Status.Error });
            }
        }
    }

}
